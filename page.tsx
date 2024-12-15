import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const reforms = [
  { title: 'Political Reforms', description: 'Establishment of the Republic, adoption of a new constitution, and introduction of multi-party democracy.' },
  { title: 'Social Reforms', description: 'Emancipation of women, introduction of Western clothing, adoption of the Gregorian calendar.' },
  { title: 'Legal Reforms', description: 'Abolition of the Caliphate, secularization of the state, adoption of a new civil code based on the Swiss model.' },
  { title: 'Educational Reforms', description: 'Unification of education, adoption of the Latin alphabet, establishment of new schools and universities.' },
  { title: 'Economic Reforms', description: 'Development of industry, nationalization of key industries, land reform.' },
  { title: 'Cultural Reforms', description: 'Promotion of Turkish history and language, establishment of cultural institutions.' },
]

export default function Reforms() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Atatürk's Reforms</h1>
      <blockquote className="text-2xl italic text-center mb-8 text-gray-600">
        "The major challenge facing us is to elevate our national life to the highest level of civilization and prosperity."
      </blockquote>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reforms.map((reform, index) => (
          <Card key={index} className="border-red-200 hover:border-red-300 transition-colors">
            <CardHeader className="border-b border-red-100">
              <CardTitle className="text-red-700">{reform.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{reform.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

