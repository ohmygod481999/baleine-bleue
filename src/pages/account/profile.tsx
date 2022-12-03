import AccountLayout from "@modules/account/templates/account-layout"
import ProfileTemplate from "@modules/account/templates/profile-template"
import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import LoadScripts from "utils/LoadScripts"

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <LoadScripts
        srcs={[
          "/assets/scripts/plugins.min.js",
          "/assets/scripts/script.js",
          // "/assets/scripts/pages/index.js",
        ]}
      />
      <Head title="Profile" description="View and edit your ACME profile." />
      <ProfileTemplate />
    </>
  )
}

Profile.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      <AccountLayout>{page}</AccountLayout>
    </Layout>
  )
}

export default Profile
