import React from 'react'
import { IRandomPersonInformation } from '../../types/types'
import identityCardMale from '../../assets/identityCardMale.jpg'
import identityCardFemale from '../../assets/identityCardFemale.jpg'
import '../../css/identity_card.css'

interface IProps {
    listRandom: IRandomPersonInformation[],
    setListRandom: React.Dispatch<React.SetStateAction<IRandomPersonInformation[]>>
}

export const IdentityCard = ({ listRandom, setListRandom }: IProps) => {
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
        <div className='identity_card'>
            <h2 className='center identity_title'>TARJETA DE IDENTIDAD</h2>
            <div className='identity_card_info' >
                <div className='rows'>
                    <div className='identity-image'>
                        <img src={listRandom[0].gender === "Masculino" ? identityCardMale : identityCardFemale} alt="Foto animada" />
                    </div>

                    <div className='description'>

                        <p>Nombre:</p>
                        {getList(1).length >= 1 ? (
                            <div className='dd-zone-div'>
                                {getList(1).map(item => (
                                    <div className='dd-element-div' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                        {item.element}
                                    </div>
                                ))}
                            </div>
                        ) :
                            <div className='dd-zone-div' onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 1))}>
                                {getList(1).map(item => (
                                    <div className='dd-element-div' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                        {item.element}
                                    </div>
                                ))}
                            </div>
                        }

                        <p>Apellidos:</p>
                        {getList(2).length >= 1 ? (
                            <div className='dd-zone-div'>
                                {getList(2).map(item => (
                                    <div className='dd-element-div' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                        {item.element}
                                    </div>
                                ))}
                            </div>
                        ) :
                            <div className='dd-zone-div' onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 2))}>
                                {getList(2).map(item => (
                                    <div className='dd-element-div' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                        {item.element}
                                    </div>
                                ))}
                            </div>
                        }

                        <p>Edad:</p>
                        {getList(3).length >= 1 ? (
                            <div className='dd-zone-div'>
                                {getList(3).map(item => (
                                    <div className='dd-element-div' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                        {item.element}
                                    </div>
                                ))}
                            </div>
                        ) :
                            <div className='dd-zone-div' onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 3))}>
                                {getList(3).map(item => (
                                    <div className='dd-element-div' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                        {item.element}
                                    </div>
                                ))}
                            </div>
                        }

                        <p>Nacionalidad:</p>
                        {getList(4).length >= 1 ? (
                            <div className='dd-zone-div'>
                                {getList(4).map(item => (
                                    <div className='dd-element-div' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                        {item.element}
                                    </div>
                                ))}
                            </div>
                        ) :
                            <div className='dd-zone-div' onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt, 4))}>
                                {getList(4).map(item => (
                                    <div className='dd-element-div' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                                        {item.element}
                                    </div>
                                ))}
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
