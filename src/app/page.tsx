import Image from 'next/image'
import Maxi from '../assets/l.jpeg'
import '../css/page.css'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="main p-6 h-[500px] flex flex-col text-center justify-center bg-slate-500 rounded-lg">
       <Image
       src={Maxi}
       alt="Not found"
       className=" rounded-full mx-auto p-2"
       width={80}
       height={80}
       />
       <h1 className='color text-xl font-bold'><span>Maximiliano Cacciamano</span></h1>
       <h4 className="location font-bold"><span>Córdoba, Argentina</span></h4>
       <h4 className="subcolor p-4">FullStack developer and Front end</h4>
       <button className="color button cursor-pointer m-1 py-2 rounded-lg">GitHub</button>
       <button className="color button cursor-pointer m-1 py-2 rounded-lg">Linkedln</button>
       <button className="color button cursor-pointer m-1 py-2 rounded-lg">Instagram</button>
       <button className="color button cursor-pointer m-1 py-2 rounded-lg">Facebook</button>
       <button className="color button cursor-pointer m-1 py-2 rounded-lg">X</button>
      </div>
    </main>
  );
}
