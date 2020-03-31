import React from 'react'

import Slider from 'react-slick'

import "./ppkeyfeatures.css"

// {abstract: {icon:, title:, desc:}}
// children is modal detail

class PPKeyFeatures extends React.Component {

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
                        <img src={feature.image} alt={feature.alt} />
                        <div className="feature-title">{feature.title}</div>
                        <div className="feature-desc">{feature.desc}</div>
                    </div>
                )
            });
            return (<Slider {...settings}>{_feature_mobile_list}</Slider>)
        }

        
        let feature_desc_list = this.props.features.map((feature, i)=> {
            let _class = "feature-item_q";
            let _title_class = "feature-title_q"
            let _desc_class = "feature-desc_q"

            if (this.state.highlight_item === i) {
                _class = "feature-item_q active"
                _title_class = "feature-title_q active"
                _desc_class = "feature-desc_q active"
            }

            return (
                <div onClick={this.clickFeature.bind(this, feature)} className={_class} key={i} value={i}>
                    <div className={_title_class}>{feature.title}</div>
                    <div className={_desc_class}>{feature.desc}</div>
                </div>
            )
        })

        let feature_image_list = this.props.features.map((feature, i)=> {
            let _class = "feature-image_q";
            if (this.state.highlight_item === i) {
                _class = "feature-image_q active";
            }

            return (
                <div className={_class} key={i}>
                    <img src={feature.image} alt={feature.alt}  />
                </div>
            )
        })

        if (!this.props.rtl || this.props.rtl === "false") {
            return (
                <div className="key-features_q">
                    <div className="key-features-left_q">
                        <div>
                            {feature_desc_list}
                        </div>
                    </div>
                    <div className="key-features-right_q">
                        {feature_image_list}
                    </div>
                </div>
            )
        }

        let _pc_features = (
            <div className="key-features_q">
                <div className="key-features-right_q">
                    {feature_image_list}
                </div>
                <div className="key-features-left_q">
                    <div>
                        {feature_desc_list}
                    </div>
                </div>
            </div>
        );
        
        return _pc_features;
    }
}

export default PPKeyFeatures;
