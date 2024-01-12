// import React from 'react';

// export default function MyCard({ movies }) {
//     return (
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-6 mb-4 no-gutters text-center mt-3 mx-1">
//             {movies.slice(0, 6).map((e, index) => (
//                 <div key={index} style={{ backgroundImage: `url(${e})` }} className="singolaCard col mb-2 px-1"></div>
//             ))}
//         </div>
//     );
// }


import React from 'react';
import ItemsCarousel from 'react-items-carousel';

export default class MyCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItemIndex: 0,
            numberOfCards: 6,
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    updateDimensions() {
        const windowWidth = window.innerWidth;
        this.setState({
            numberOfCards: windowWidth < 768 ? 1 : 6,
        });
    }

    createChildren = () => this.props.movies.map((e, i) =>
        <div className="card-container" key={i}>
            <div style={{ backgroundImage: `url(${e})` }} className="singolaCard col my-2"></div>
        </div>
    );

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const { activeItemIndex, numberOfCards } = this.state;
        const children = this.createChildren();

        return (
            <ItemsCarousel
                numberOfCards={numberOfCards}
                gutter={8}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}

                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={30}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}
            >
                {children}
            </ItemsCarousel>
        );
    }
}