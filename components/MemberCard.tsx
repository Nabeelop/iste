import Image from 'next/image'

export interface Member {
  name: string,
  sig: string | null,
  post: string | null,
}

const MemberCard = ({name, sig, post} : Member) => {
  return (
    <div className='p-2 rounded-xl h-[300px] w-[250px] border border-gray-800 flex flex-col backdrop-blur-xs'>

        <div className='h-[225px]'><Image alt='profile' src={"/tparentastro.png"} width={230} height={200} className='rounded-t-md' /></div>
        <div className='rounded-b-md w-[230px] h-full px-2 py-1 flex flex-col justify-between'>
            <div>
                <p className='text-base text-center font-bold'>{(name == "" || !name) ? "Exo Planet" : name}</p>
            </div>
            <div className='flex justify-between'>
                <p className='text-xs text-gray-400 font-semibold'>{(sig == "" || !sig) ? "SIG" : sig}</p>
                <p className='text-xs text-gray-400 font-semibold'>{(post == "" || !post) ? "Team" : post}</p>
            </div>
        </div>

    </div>
  )
}

export default MemberCard