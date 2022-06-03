import PropTypes from 'prop-types';


export default function FeedbackOptions({ options, onFeedbackLeave }) {
    const firstCapitalLetter = string =>
        string[0].toUpperCase() + string.substring(1);
    
    return (
        <>
            {options.map((option, index) => (
                <button
                    key={index}
                    type="button"
                    className={button}
                    onClick={onFeedbackLeave}
                >
                    {firstCapitalLetter(option)}
                </button>
            ))}
        </>
    );
}


FeedbackOptions.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.string.isRequired),
    onFeedbackLeave: PropTypes.func.isRequired,
}