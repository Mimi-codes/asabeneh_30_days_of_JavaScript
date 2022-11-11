const month = prompt('Enter month:');

if (month === 'January'|| month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
    alert(`${month} has 31 days`);
}

else if (month === 'September' || month === 'April' || month === 'June' || month === 'November') {
    alert(`${month} has 30 days`);
}

else if (month === 'February') {
    alert(`${month} has 28 days`);
}

else {
    alert('Invalid month');
}