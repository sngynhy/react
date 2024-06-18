import React from 'react'

function Book (props) {
    console.log('Book', props)
    return (
        <div>
            <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numbOfPage}페이지로 이루어져 있습니다.`}</h2>
        </div>
    )
}

export default Book