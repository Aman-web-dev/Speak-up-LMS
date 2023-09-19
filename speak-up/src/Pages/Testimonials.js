import React from 'react'

function Testimonials() {
  return (
    <div className='text-black'>
      <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container px-6 py-12 mx-auto">
		<div className="grid items-center gap-4 xl:grid-cols-5">
			<div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
				<h2 className="text-4xl font-bold">Why Learners Loves Us?</h2>
				<p className="dark:text-gray-400">We Get Daily Calls And Tweets of Our Past Students Who got placed at large MNC's As language expert and executives we Get super Hyped After Reading Their Texts and Tweets .</p>
			</div>
			<div className="p-6 xl:col-span-3">
				<div className="grid gap-4 md:grid-cols-2">
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900 transform hover:-translate-y-2 transition-transform">
							<p>"Enrolling my daughter in Speak-up's language courses was a game-changer. Not only did she master a new language, but she also gained a global perspective that's invaluable. As a parent, I'm thrilled with the results and the dedicated teaching approach."</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?1" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900 transform hover:-translate-y-2 transition-transform">
							<p>"I'm amazed by the progress my son made after joining Speak-up's language classes. The interactive lessons and skilled instructors made learning a new language an enjoyable experience. The confidence he's gained has not only helped academically but also in his personal growth."</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?2" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
					</div>
					<div className="grid content-center gap-4">
						<div className="p-6 rounded shadow-md dark:bg-gray-900 transform hover:-translate-y-2 transition-transform">
							<p>"Speak-up has transformed the way my child perceives languages. The tailored curriculum and engaging teaching methods have ignited a passion for learning and exploring diverse cultures. The language skills acquired here have opened up exciting opportunities for my child's future."</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?3" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
						<div className="p-6 rounded shadow-md dark:bg-gray-900 transform hover:-translate-y-2 transition-transform">
							<p>"Choosing Speak-up for my daughter's language education was a wise decision. The teachers' commitment to fostering language proficiency along with their nurturing approach made all the difference. I've watched my daughter's language skills flourish, giving her a competitive edge in this interconnected world."</p>
							<div className="flex items-center mt-4 space-x-4">
								<img src="https://source.unsplash.com/50x50/?portrait?4" alt="" className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500" />
								<div>
									<p className="text-lg font-semibold">Leroy Jenkins</p>
									<p className="text-sm dark:text-gray-400">CTO of Company Co.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
    </div>
  )
}

export default Testimonials
