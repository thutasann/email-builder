import EmailTemplateList from '@/components/organisms/dashboard/welcome/email-template-list'
import DashboardWelcome from '@/components/organisms/dashboard/welcome/welcome'
import Header from '@/components/organisms/Landing/Header'

function DashboardMainPage() {
  return (
    <>
      <Header />
      <section className='flex flex-col gap-4 p-4'>
        <DashboardWelcome />
        <EmailTemplateList />
      </section>
    </>
  )
}

export default DashboardMainPage
