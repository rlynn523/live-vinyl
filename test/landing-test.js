import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import Landing from '../src/components/landing';

describe('Landing component', function() {
    it('Should Render App Title, Chips, and Buttons', function() {
        let renderer = TestUtils.createRenderer();
        renderer.render(<Landing />);
        let result = renderer.getRenderOutput();
        result.props.children.props.className.should.equal('landingMain');

        let landing = result.props.children.props;
        landing.children[0].type.should.equal('p');
        landing.children[0].props.className.should.equal('titleMain');
        landing.children[0].props.children.should.equal('Welcome To Live Vinyl');

        landing.children[1].type.should.equal('p');
        landing.children[1].props.className.should.equal('titleSecond');
        landing.children[1].props.children.should.equal('Search An Artist You Love');

        landing.children[2].type.should.equal('div');
        landing.children[2].props.className.should.equal('landingChips');

        let chips = landing.children[2].props;
        chips.children[0].props.children.should.equal('Get Current Tour Dates & Save Tour Dates To Your Profile');
        chips.children[1].props.children.should.equal('Get Available Albums On Spotify');
        chips.children[2].props.children.should.equal('Get Vinyl Releases From Artist & Add Them To Your Collection');
        chips.children[3].props.children.should.equal('Get Related Artists');

        let buttons = landing.children[3].props;
        buttons.className.should.equal('landingButtons');
        buttons.children[0].props.to.should.equal('/sign-in');
        buttons.children[1].props.to.should.equal('/create-user');
        buttons.children[2].props.to.should.equal('/search');
    });
});
