import React from 'react'
import { IRandomPersonInformation } from '../../services/getRandomPersonInformation'
import '../../css/drag_and_drop.css'
import '../../css/words.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { render } from 'react-dom'

interface IProps {
    listRandom: IRandomPersonInformation[],
    setListRandom: React.Dispatch<React.SetStateAction<IRandomPersonInformation[]>>,
    nextLevel: () => void,
    exercise: number
}

export const Words = ({ listRandom, setListRandom, nextLevel, exercise }: IProps) => {
    const MySwal = withReactContent(Swal)
    const getList = (list: number) => {
        return listRandom.filter(item => item.list === list)
    }

    // console.log(listRandom)

    const startDrag = (evt: React.DragEvent<HTMLDivElement>, item: IRandomPersonInformation) => {
        evt.dataTransfer.setData('itemID', item.id)
        console.log(item)
    }

    const draggingOver = (evt: React.DragEvent<HTMLDivElement>) => {
        evt.preventDefault();
    }

    const onDrop = (evt: React.DragEvent<HTMLDivElement>, list: number) => {
        const itemID = evt.dataTransfer.getData('itemID');

        const item = listRandom.find(item => item.id == itemID);
        if (!item) return
        item.list = list;



        const newState = listRandom.map(task => {
            if (task.id === itemID) return item;
            return task
        })
        setListRandom(newState);
    }

    return (
        <>
            <div className='words center'>
                <div className='column'>
                    <div className='dd-zone' onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 0))}>
                        {getList(0).map(item => {
                            return (<div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>{item.element}</div>)
                        })}
                    </div>
                    <div>
                        <button onClick={nextLevel} disabled={exercise > 5 ? true : false}>Siguiente Nivel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
