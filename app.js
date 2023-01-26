const receiveItems = document.querySelector('.receive-items-container')

const stockItems = [
    'Box 1',
    'Box 2',
    'Box 3',
    'Box 4',
    'Box 5',
    'Box 6',
    'Box 7',
    'Box 8'
]

// Create buttons using the receiveItems array and assign attributes and event listeners.
// Add buttons to the receive-items container.
stockItems.forEach(item => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = item
    buttonElement.setAttribute('id', item)
    buttonElement.addEventListener('click', () => handleClick(item))
    receiveItems.append(buttonElement)
})