import CounterView from "@/Counter";




export default function Home() {
 
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24 py-5 bg-slate-400">
      <div className='text-2xl font-bold'>Counter App</div>
      
      <CounterView/>
    </main>
  )
}
