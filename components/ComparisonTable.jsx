export default function ComparisonTable({ comparisons }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Aspect</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Traditional Approach</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Modern Approach</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Heritage Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {comparisons.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.aspect}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{item.traditional}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{item.modern}</td>
              <td className="px-4 py-3 text-sm font-medium text-green-700">{item.recommendation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
