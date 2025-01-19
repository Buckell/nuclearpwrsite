import HomePageContainer from "./HomePageContainer.jsx";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <HomePageContainer>
            <main>
                <h1>
                    About our project!
                </h1>
            </main>
        </HomePageContainer>
    );
}