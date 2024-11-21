export default function UserInput({title, onInputChange}) {
    let label = title.replace("-", ' ');

    function handleChange(event) {
        const value = event.target.value;
        const id = event.target.id;

        switch (id) {
            case 'initial-investment':
                onInputChange('initial', value);
                break;
            case 'annual-investment':
                onInputChange('annual', value);
                break;
            case 'duration':
                onInputChange('duration', value);
                break;
            case 'expected-return':
                onInputChange('expected', value);
                break;
        }
    }

    return (
        <>
            <span>
                <label htmlFor={title}>{label}</label>
                <input id={title} type='number' min='0' onChange={handleChange} required/>
            </span>
        </>
    )
}