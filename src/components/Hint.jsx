function Hint ({selected, setSelected}) {
    return <div className="hintPage">
        <p>Coucou, j'ai cliqué sur le numéro {selected}</p>
        <p onClick={() => setSelected(null)}>Clique ici pour fermer</p>
    </div>
}

export default Hint;