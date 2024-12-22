import { Museum } from '../../../../Data'




const ArtifactCard: React.FC<{ artifact: Artifact }> = ({ artifact }) => (
	<div className="bg-dark-card p-6 rounded-lg shadow-lg transition-all hover:bg-gray-800">
		<h3 className="text-xl font-semibold mb-2">{artifact.name}</h3>
		<img src={artifact.photo} alt={artifact.name} className="w-full rounded-lg mb-4" />
		<p className="text-gray-300 mb-2">{artifact.description}</p>
		<p className="text-xs text-gray-500">{`Вік: ${artifact.age} років`}</p>
		<p className="text-xs text-gray-500">{`Місце походження: ${artifact.origin}`}</p>
	</div>
)

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
	<div className="flex items-center bg-dark-card p-6 rounded-lg shadow-lg mb-8 transition-all hover:bg-gray-800">
		<img src={member.photo} alt={member.name} className="w-16 h-16 rounded-full mr-6" />
		<div>
			<h3 className="text-xl font-semibold text-light-text">{member.name}</h3>
			<p className="text-sm text-gray-300">{member.role}</p>
			<p className="text-sm text-gray-400 mt-2">{member.bio}</p>
		</div>
	</div>
)

const MuseumNewsList: React.FC<{ news: MuseumNews[] }> = ({ news }) => (
	<section className="mt-16 text-light-text">
		<h2 className="text-3xl font-semibold mb-6">Новини музею</h2>
		<ul className="space-y-6">
			{news.map((newsItem) => (
				<li key={newsItem.id} className="bg-dark-card p-6 rounded-lg shadow-lg transition-all hover:bg-gray-800">
					<h3 className="text-2xl font-semibold">{newsItem.title}</h3>
					<p className="text-gray-300">{newsItem.content}</p>
					<p className="text-sm text-gray-500">{newsItem.date}</p>
				</li>
			))}
		</ul>
	</section>
)

const Page = () => (
	<div className="bg-dark-bg text-light-text min-h-screen p-8">


		{/* Museum News */}
		<MuseumNewsList news={Museum.news} />

		{/* Museum Collections */}
		<section className="mt-16">
			<h2 className="text-4xl font-semibold mb-8">Колекції музею</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{Museum.collections.map((collection) => (
					<div key={collection.id} className="mb-12">
						<h3 className="text-2xl font-semibold">{collection.name}</h3>
						<p>{collection.description}</p>
						<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
							{collection.items.map((item) => (
								<ArtifactCard key={item.id} artifact={item} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>

		{/* Team Members */}
		<section className="mt-16">
			<h2 className="text-4xl font-semibold mb-8">Команда музею</h2>
			<div className="space-y-8">
				{Museum.team.map((member) => (
					<TeamMemberCard key={member.id} member={member} />
				))}
			</div>
		</section>

		{/* Contact Info */}
		<section className="mt-16 bg-dark-bg p-8 rounded-lg">
			<h2 className="text-3xl font-semibold mb-6">Контактна інформація</h2>
			<p className="text-lg">Адреса: {Museum.contacts.address}</p>
			<p className="text-lg">Телефон: {Museum.contacts.phone}</p>
			<p className="text-lg">Email: {Museum.contacts.email}</p>
			<p className="text-lg">Години роботи: {Museum.contacts.workingHours}</p>
		</section>
	</div>
)

export default Page
