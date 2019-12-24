const planes = [
    {
        planePreview: {
            icon: "url('./img/plane1.png')",
            model: 'Boeing 777-300ER'
        },
        planeInfo: {
            speed: '905',
            distance: '11200',
            type: 'Дальнемагистральный пассажирский самолёт',
            image: "url('./img/plane1image.jpg')"
        }
    },
    {
        planePreview: {
            icon: "url('./img/plane2.png')",
            model: 'Boeing 737-800'
        },
        planeInfo: {
            speed: '900',
            distance: '4500',
            type: 'Среднемагистральный пассажирский самолёт',
            image: "url('./img/plane2image.jpg')"
        }
    },
    {
        planePreview: {
            icon: "url('./img/plane3.png')",
            model: 'Airbus А330-200'
        },
        planeInfo: {
            speed: '900',
            distance: '11 200',
            type: 'Дальнемагистральный пассажирский самолёт',
            image: "url('./img/plane3image.jpg')"
        }
    },
    {
        planePreview: {
            icon: "url('./img/plane4.png')",
            model: 'Airbus А321'
        },
        planeInfo: {
            speed: '830',
            distance: '4000',
            type: 'Среднемагистральный пассажирский самолёт',
            image: "url('./img/plane4image.jpg')"
        }
    },
    {
        planePreview: {
            icon: "url('./img/plane5.png')",
            model: 'Airbus A320'
        },
        planeInfo: {
            speed: '830',
            distance: '4000',
            type: 'Ближнемагистральный пассажирский самолёт',
            image: "url('./img/plane5image.jpg')"
        }
    },
    {
        planePreview: {
            icon: "url('./img/plane6.png')",
            model: 'SuperJet 100'
        },
        planeInfo: {
            speed: '840',
            distance: '2400',
            type: 'Ближнемагистральный пассажирский самолёт',
            image: "url('./img/plane6image.jpg')"
        }
    },
]

window.onload = () => {
    const header = document.querySelector('.header')
    window.onscroll = () => {
        if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
            header.style.height = '40px'
        } else {
            header.style.height = '60px'
        }
    }

    const list = document.querySelector('.list')

    const renderPlane = ({planePreview, planeInfo}) => {

        const newPlane = document.createElement('div')
        newPlane.className = 'plane'

        const preview = document.createElement('div')
        preview.className = 'preview'

        const icon = document.createElement('div')
        icon.className = 'icon'
        icon.style.backgroundImage = planePreview.icon

        const model = document.createElement('div')
        model.className = 'model'
        model.innerText = planePreview.model

        const arrow = document.createElement('div')
        arrow.className = 'arrow'

        const info = document.createElement('div')
        info.className = 'info'

        const details = document.createElement('div')
        details.className = 'details'

        const speed = document.createElement('div')
        speed.className = 'item'
        speed.innerText = `Скорость: 
        ${planeInfo.speed}`

        const distance = document.createElement('div')
        distance.className = 'item'
        distance.innerText = `Максимальное расстояние: 
        ${planeInfo.distance}`

        const type = document.createElement('div')
        type.className = 'item'
        type.innerText = `Тип: 
        ${planeInfo.type}`

        details.appendChild(speed)
        details.appendChild(distance)
        details.appendChild(type)

        const image = document.createElement('div')
        image.className = 'planeImage'
        image.style.backgroundImage = planeInfo.image

        info.appendChild(details)
        info.appendChild(image)

        let isOpen = false

        arrow.addEventListener('click', () => {
            isOpen = !isOpen
            arrow.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(-90deg)'
            info.style.maxHeight = isOpen ? '200px' : '0px'
        })

        preview.appendChild(icon)
        preview.appendChild(model)
        preview.appendChild(arrow)

        newPlane.appendChild(preview)
        newPlane.appendChild(info)

        list.appendChild(newPlane)
    }

    planes.map(plane => renderPlane(plane))
}