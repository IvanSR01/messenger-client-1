import dynamic from 'next/dynamic'
const Dashboard = dynamic(
	() => import('../../../screens/dashboard/Dashboard'),
	{ ssr: false }
)

const page = () => {
	return (
		<>
			<Dashboard screen='mainpage' />
		</>
	)
}

export default page
