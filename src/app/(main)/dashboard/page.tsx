import EmailTemplateList from '@/components/organisms/dashboard/welcome/email-template-list'
import DashboardWelcome from '@/components/organisms/dashboard/welcome/welcome'
import Header from '@/components/organisms/Landing/header'
import { Fragment } from 'react'

function DashboardMainPage() {
  return (
    <Fragment>
      <Header />
      <section className='flex flex-col gap-4 p-4'>
        <DashboardWelcome />
        <EmailTemplateList />
      </section>
    </Fragment>
  )
}

export default DashboardMainPage
