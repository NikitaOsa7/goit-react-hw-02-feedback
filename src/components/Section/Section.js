import PropTypes from 'prop-types';

export default function Statistics({children}) {
    return (
        <section>
            <h2>Please leave feedback</h2>
            {children}
        </section>

    );
}

Statistics.propTypes = {
    children : PropTypes.arrayOf(PropTypes.object)
}