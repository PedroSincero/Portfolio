import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Title from '../../components/Title'

export default function Contacts() {
  const text  = `I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me`
  return (
    <div>
      <Header />
        <div className='py-8  px-32 min-[1920px]:px-48'>
          <Title title={'contacts'} span={'/'} subTitle={'Who am i?'}/>
          <div className="flex justify-between">
            <div className="w-1/5 text-secondary pt-16">
              { text }
            </div>
          </div>
          <Title title={'all-media'} span={'#'}/>
        </div>
      <Footer />
    </div>
  )
}
