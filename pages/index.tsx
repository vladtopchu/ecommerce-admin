import NavigationCard from "../components/navigation-card";

export default function Home() {
  return (
		<div className={"max-w-3xl mt-6 mx-auto flex items-center justify-center space-x-10"}>
			<NavigationCard title="Товары" links={['/add/product', '/list/products']}/>
			<NavigationCard title="Свойства" links={['/add/property', '/list/properties']}/>
			<NavigationCard title="Категории" links={['/add/category', '/list/categories']}/>
			<NavigationCard title="Пользователи" links={['/add/user', '/list/users']}/>
    </div>
	)
}
