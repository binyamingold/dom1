document.addEventListener('DOMContentLoaded', function() {
    var ulElements = document.querySelectorAll('ul');
    var middleIndex = Math.floor(ulElements.length / 2);
    var middleUl = ulElements[middleIndex];
    var middleLi = middleUl.children[Math.floor(middleUl.children.length / 2)];

    middleLi.textContent = 'New Text';
    middleLi.style.fontSize = '24px';
    middleLi.style.color = 'blue';
});