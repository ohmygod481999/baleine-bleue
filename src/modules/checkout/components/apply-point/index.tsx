import { Cart, Customer } from "@medusajs/medusa"
declare module "@medusajs/medusa" {
  interface StorePostCartsCartReq {
    consume_point?: number
  }

  interface Cart {
    consume_point: number
  }
}
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Trash from "@modules/common/icons/trash"
import { useCart, useMeCustomer } from "medusa-react"
import React, { useMemo } from "react"
import { useForm } from "react-hook-form"

type ApplyPointFormValues = {
  consume_point: string
}

type ApplyPointProps = {
  cart?: Omit<Cart, "refundable_amount" | "refunded_total">
  customer: Omit<Customer, "password_hash">
}

const ApplyPoint: React.FC<ApplyPointProps> = ({ cart, customer }) => {
  const {
    updateCart: { mutate, isLoading },
    setCart,
  } = useCart()

  const {
    register,
    handleSubmit,
    formState: { touchedFields, errors },
    setError,
  } = useForm<ApplyPointFormValues>()

  const appliedConsumePoint = useMemo(() => {
    if (!cart || !cart.consume_point) {
      return undefined
    }

    return cart.consume_point
  }, [cart])

  const onSubmit = (data: ApplyPointFormValues) => {
    mutate(
      {
        // gift_cards: [{ code: data.consume_point }],
        consume_point: Number(data.consume_point),
      },
      {
        onSuccess: ({ cart }) => setCart(cart),
        onError: () => {
          setError(
            "consume_point",
            {
              message: "Code is invalid",
            },
            {
              shouldFocus: true,
            }
          )
        },
      }
    )
  }

  const onRemove = () => {
    mutate(
      {
        consume_point: 0,
      },
      {
        onSuccess: ({ cart }) => setCart(cart),
      }
    )
  }

  if (!customer) {
    return <></>
  }

  return (
    <div className="w-full bg-white p-6 flex flex-col">
      <div className="mb-4">
        <h3 className="text-base-semi">
          Apply point (Current point: {customer.point})
        </h3>
      </div>
      <div className="text-small-regular">
        {appliedConsumePoint ? (
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-700">Apply point: </span>
              <span className="font-semibold">{appliedConsumePoint}</span>
            </div>
            <div>
              <button
                className="flex items-center gap-x-2"
                onClick={onRemove}
                disabled={isLoading}
              >
                <Trash size={16} />
                <span className="sr-only">Remove point from order</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="grid grid-cols-[1fr_80px] gap-x-2">
              <Input
                label="Point"
                type="number"
                {...register("consume_point", {
                  required: "Point is required",
                })}
                errors={errors}
                touched={touchedFields}
              />
              <div>
                <Button
                  className="!min-h-[0] h-[46px] w-[80px]"
                  disabled={isLoading}
                  isLoading={isLoading}
                >
                  Apply
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default ApplyPoint
