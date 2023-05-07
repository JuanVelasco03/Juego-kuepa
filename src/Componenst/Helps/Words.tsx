import React from 'react'
import { IRandomPersonInformation } from '../../types/types'
import '../../css/drag_and_drop.css'
import '../../css/words.css'

interface IProps {
    listRandom: IRandomPersonInformation[],
    setListRandom: React.Dispatch<React.SetStateAction<IRandomPersonInformation[]>>,
    nextLevel: () => void,
    exercise: number
}

export const Words = ({ listRandom, setListRandom, nextLevel }: IProps) => {
    const getList = (list: number) => {
        return listRandom.filter(item => item.list === list)
    }


    const startDrag = (evt: React.DragEvent<HTMLDivElement>, item: IRandomPersonInformation) => {
        evt.dataTransfer.setData('itemID', item.id)
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
                </div>
                <div className='words-button-zone'>
                    <button onClick={nextLevel} className='words-button'>Siguiente Nivel</button>
                </div>
            </div>
        </>
    )
}
