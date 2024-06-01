import useGenres from "../../hooks/useGenres"

const Sidebar = () => {
    const { genres, loading, error } = useGenres();
    return (
        <aside>
            <ul>
                {genres.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </aside>
    )
}

export default Sidebar