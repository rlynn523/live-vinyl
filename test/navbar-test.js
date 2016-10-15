import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { NavBar } from '../src/components/navbar';

describe('NavBar component', function() {
    it('Should Render NavBar And Icons With Different Routes', function() {
        let renderer = TestUtils.createRenderer();
        renderer.render(<NavBar />);
        let result = renderer.getRenderOutput();

        let navbar = result.props.children.props;
        navbar.className.should.equal('appBar');
        navbar.title.should.equal('Live Vinyl');

        let icons = navbar.iconElementRight.props;
        icons.children[0].props.to.should.equal('/');
        icons.children[1].props.to.should.equal('/search');
        icons.children[2].props.to.should.equal('/saved');
    })
});
