import iconFacbook from '../assets/icon-facebook.svg'
import iconLinkedin from '../assets/icon-linkedin.svg'
import iconInstagram from '../assets/icon-instagram.svg'
import iconTwitter from '../assets/icon-twitter.svg'

export function Footer() {
  return (
    <footer className='bg-blue800 px-[40px]'>
      <div className='pt-[130px] pb-[30px] bg-blue800 w-[100%] max-w-[1216px] m-auto lg:pt-[72px]'>
        <div className="w-[100%]" >
          <p className="uppercase text-white text-[14px] tracking-[0.7rem] text-center pb-[0.27px]">
            Contato
          </p>
          <h1 className="text-orange500 text-[42px] font-[700] leading-[50px] text-center">
            contato@we-rtek.com.br
          </h1>

          <div className="flex justify-around mt-[50px] mb-[130px]
            sm:flex-col sm:mb-[80px]
          ">
            <div className='sm:mb-[40px]'>
              <h3 className="uppercase text-white text-[14px] tracking-[0.7rem] text-center pb-[0.27px] mb-[12px]">
                endereço
              </h3>
              <p className="text-white text-center">
                Some Street, 00 <br />
                Brasil
              </p>
            </div>
            <div className="text-white text-center">
              <h3 className="uppercase text-white text-[14px] tracking-[0.7rem] text-center pb-[0.27px] mb-[12px]">
                telefone
              </h3>
              <p>
                Sede: 00 00000.0000 <br />
                Suporte: 00 00000.0000
              </p>
            </div>
          </div>
          <div className="flex justify-between
            sm:flex-col sm:justify-centen sm:items-center sm:gap-[20px]
          ">
            <div className="text-white sm:text-center">
              We R Tek, 2022. © Todos os direitos reservados.
            </div>
            <div className="flex gap-[32px]">
              <span><img src={iconFacbook} /></span>
              <span><img src={iconLinkedin} /></span>
              <span><img src={iconInstagram} /></span>
              <span><img src={iconTwitter} /></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}