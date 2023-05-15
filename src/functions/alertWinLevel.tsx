import Swal from 'sweetalert2'


export const alertWinLevel = (title: string) => {
    Swal.fire(
        'Buen trabajo',
        `${title}`,
        'success'
    )
}

//Se agrega el comentario