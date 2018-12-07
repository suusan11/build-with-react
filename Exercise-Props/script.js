var VacancySign = React.createClass({
    render: function() {
        var text;
        if(this.props.hasvacancy) {
            text = 'Vacancy';
        }else {
            text = 'No Vacancy';
        }
        return <div>{text}</div>;
    }
}); // Create your component here

// Once you create your component, render your component and try both states.
ReactDOM.render(
    <VacancySign hasvacancy={false} />,
    document.getElementById('container')
);