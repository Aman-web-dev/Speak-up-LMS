

export default function Categories({src, name}) {
    const flagData = [
        
        {
        id: 1,
        name: 'Korean',
        imgLink: "https://img.freepik.com/free-vector/illustration-south-korea-flag_53876-27132.jpg?w=1380&t=st=1693387562~exp=1693388162~hmac=accfa9c9d271785bf55ba903d201577835551434f1cb6c7d702649d8179008d9"
    }, 
    {
        id: 2,
        name: 'Japanese',
        imgLink: "https://img.freepik.com/free-vector/illustration-japan-flag_53876-27128.jpg?w=1380&t=st=1693387601~exp=1693388201~hmac=754b7d38ba7850f10d22ef8e582f244c4c4c265adfe61521dbeb59df44017ecf"
    },  
    {
        id: 3,
        name: 'America',
        imgLink: "https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?w=1380&t=st=1693387651~exp=1693388251~hmac=8e87d54f45a100c04351fa8b7039cfeb832da960e22006ac1586029127e15304"
    },  
    {   id:4,
        name: 'France',
        imgLink: "https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg?w=1380&t=st=1693387889~exp=1693388489~hmac=c2c4e206a6549bd9ae21bfc33379d252e9d54735baf6e5ebad4507485a6c41f5"
    },   
    {   id:5,
        name: 'Chinese',
        imgLink: "https://img.freepik.com/free-vector/illustration-china-flag_53876-27015.jpg?w=1380&t=st=1693387758~exp=1693388358~hmac=f2aa92e5893ed16bce04fb8f346d83f550fcfbdc84b0cc5c8890044d0abe095a"
    },   
    {   id:6,
        name: 'Portugese',
        imgLink: "https://img.freepik.com/free-vector/illustration-portugal-flag_53876-18170.jpg?w=1380&t=st=1693387853~exp=1693388453~hmac=80ef2c670d9c6b9231a5d8f6c8dd66494b04183e76e71575cd5a09d74f1d6520"
    }, 

]
  return (
    <section className="py-12 px-8 overflow-x-auto" >
    <h2 className="text-3xl font-bold mb-4 text-black">Top Languages</h2>
    <div className="card-container rounded-md">
        {flagData.map((data) => (

<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 shadow-xl my-2 xl:transform xl:hover:-translate-y-2 xl:transition-transform" key={data.id}>
<a href="#">
    <img class="rounded-t-lg" src={data.imgLink} alt={data.name} />
</a>
<div class="p-5">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
    </a>
   
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
         <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
</div>

           
        ))}
    </div>
</section>



  )
}




