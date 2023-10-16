

function MyList() {
    const list = ['map', 'reduce', 'slice', 'include']
    //для key использую значение елемента, т к по задумке они должны быть уникальными
    return (
        <>
            {list.map(e => <div key={e}>{e}</div>)} 
        </>
    )
}

export default MyList;