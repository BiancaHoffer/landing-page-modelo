import { Button } from "../Button";

export function FormEmail() {
  return (
    <div className='bg-orange500 px-[40px]'>
      <div className='flex flex-col items-center justify-center gap-[46px] bg-orange500 py-[130px] w-[100%] max-w-[1216px] m-auto lg:py-[72px]'>
        <h3 className='text-[26px] text-center font-[600] text-white max-w-[600px]'>
          Phasellus mattis massa id magna porta lacinia varius ac sem morbi risus
        </h3>
        <form action="" className='flex justify-center items-center gap-[22px] sm:flex-col'>
          <input
            type="email"
            placeholder='Insira seu e-maio'
            className=' px-[40px] w-[100%] h-[96px] rounded-[48px] shadow-xl text-[18px] text-blue750 focus:outline-none focus:shadow-outline placeholder-blue750'
          />
          <Button name='Assine' />
        </form>
      </div>
    </div>
  )
}