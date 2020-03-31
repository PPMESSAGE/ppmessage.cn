import React from 'react'

import Slider from 'react-slick'

import "./keyfeatures.css"

// [{title:"", alt:"", image:""}]

class KeyFeatures extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            highlight_item: 0,
            is_mobile: false
        }

        this.clickFeature = this.clickFeature.bind(this);
        this.resize = this.resize.bind(this);
    }

    resize() {
        if (window.innerWidth < 960) {
            this.setState({is_mobile: true});
            console.log("set true");
        } else {
            this.setState({is_mobile: false});
            console.log("set false");
        }
    }
    
    componentWillUnmount() {       
        window.removeEventListener('resize', this.resize);
    }

    componentDidMount() {
        this.resize();
        window.addEventListener('resize', this.resize);
    }

    clickFeature(feature, e) {
        console.log("clickFeature", feature);
        this.setState({highlight_item: feature.feature_id});
    }

    
    render() {

        this.props.features.map((feature, i) => {
            feature.feature_id = i;
            return feature;
        });


        if (this.state.is_mobile) {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                swipeToSlide: true,
                slidesToShow: 1,
                slidesToScroll: 1
            };

            let _feature_mobile_list = this.props.features.map((feature, i)=> {
                return (
                    <div key={i} value={i}>
                        <img src={feature.image} alt={feature.alt||feature.desc} />
                        <div className="feature-title">{feature.title}</div>
                        <div className="feature-desc">{feature.desc}</div>
                    </div>
                )
            });
            return (<Slider {...settings}>{_feature_mobile_list}</Slider>)
        }

                
        let feature_desc_list = this.props.features.map((feature, i)=> {
            let _class = "feature-item";
            let _title_class = "feature-title"
            let _desc_class = "feature-desc"

            if (this.state.highlight_item === i) {
                _class = "feature-item active"
                _title_class = "feature-title active"
                _desc_class = "feature-desc active"
            }

            return (
                <div onClick={this.clickFeature.bind(this, feature)} className={_class} key={i} value={i}>
                    <div className={_title_class}>{feature.title}</div>
                    <div className={_desc_class}>{feature.desc}</div>
                </div>
            )
        })

        let feature_image_list = this.props.features.map((feature, i)=> {
            let _class = "feature-image";
            if (this.state.highlight_item === i) {
                _class = "feature-image active";
            }

            return (
                <div className={_class} key={i}>
                    <img src={feature.image} alt={feature.alt || feature.desc}  />
                </div>
            )
        })

        if (!this.props.rtl || this.props.rtl === "false") {
            return (
                <div className="key-features">
                    <div className="key-features-left">
                        <div>
                            {feature_desc_list}
                        </div>
                    </div>
                    <div className="key-features-right">
                        {feature_image_list}
                    </div>
                </div>
            )
        }

        let _pc_features = (
            <div className="key-features">
                <div className="key-features-right">
                    {feature_image_list}
                </div>
                <div className="key-features-left">
                    <div>
                        {feature_desc_list}
                    </div>
                </div>
            </div>
        );
        
        return _pc_features;
    }
}

export default KeyFeatures
