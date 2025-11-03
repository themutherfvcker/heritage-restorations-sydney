export default function MaterialsTable({ materials }) {
  return (
    <div className="my-8 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Material</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Period</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Common Issues</th>
            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Restoration Approach</th>
          </tr>
        </thead>
        <tbody>
          {materials.map((material, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="px-4 py-3 text-sm text-gray-900">{material.name}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{material.period}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{material.issues}</td>
              <td className="px-4 py-3 text-sm text-gray-700">{material.approach}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
