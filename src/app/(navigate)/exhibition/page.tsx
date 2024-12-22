import { Museum } from '../../../../Data'
export default function page() {
	const ExhibitionCard: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => (
		<div className="bg-dark-card p-6 rounded-lg shadow-lg transition-all hover:bg-gray-800">
			<h3 className="text-2xl font-semibold mb-2">{exhibition.name}</h3>
			<p className="text-sm text-gray-300">{exhibition.description}</p>
			<p className="text-xs text-gray-500 mt-2">{`Дата: ${exhibition.startDate} - ${exhibition.endDate}`}</p>
			<p className="text-xs text-gray-500">{`Місце: ${exhibition.location}`}</p>
		</div>
	)
	return (
		<div>
			<section className="mt-16">
				<h2 className="text-4xl font-semibold mb-8">Поточні виставки</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{Museum.exhibitions.map((exhibition) => (
						<ExhibitionCard key={exhibition.id} exhibition={exhibition} />
					))}
				</div>
			</section>
		</div>
	)
}