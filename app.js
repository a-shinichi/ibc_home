function App() {
    return (
        <div data-name="app">
            <Header />
            <main>
                <Hero />
                <Vision />
                <Services />
                <Overview />
                <Recruit />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)