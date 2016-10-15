import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
should();
import store from '../src/store';
import { Music } from '../src/components/music';

describe('Music component', function() {
    it('Should Render List Of Artist Albums', function() {
        let artistAlbums = {
            music: {
                items: [
                    {
                        external_urls: { spotify: 'https://open.music.com/radiohead' },
                        images: 'www.images.com',
                        name: 'radiohead',
                        id: '123134'
                    },
                    {
                        external_urls: { spotify: 'https://open.music.com/redfang' },
                        images: 'www.images.com',
                        name: 'red fang',
                        id: '123'
                    },
                ]
            }
        }
        let renderer = TestUtils.createRenderer();
        renderer.render(<Music artistAlbums={artistAlbums} />);
        let result = renderer.getRenderOutput();
        let paper = result.props.children;
        paper.props.className.should.equal('paper');

        let musicTitle = paper.props.children.props.children[0].props.children;
        musicTitle.type.should.equal('p');
        musicTitle.props.className.should.equal('musicTitle');
        musicTitle.props.children.should.equal('Artist Albums');

        let musicList = paper.props.children.props.children[1];
        musicList.type.should.equal('ul');
        musicList.props.className.should.equal('albumList');

        let listItem = musicList.props;
        listItem.children[0].type.should.equal('li');
        listItem.children[0].key.should.equal('123134');
        listItem.children[0].props.children[0].props.href.should.equal('https://open.music.com/radiohead');
        listItem.children[0].props.children[0].props.children.type.should.equal('img');
        listItem.children[0].props.children[1].type.should.equal('br');
        listItem.children[0].props.children[2].props.className.should.equal('albumChip');
        listItem.children[0].props.children[2].props.children.props.href.should.equal('https://open.music.com/radiohead');
        listItem.children[0].props.children[2].props.children.props.children.should.equal('radiohead');
        listItem.children[1].type.should.equal('li');
        listItem.children[1].key.should.equal('123');
        listItem.children[1].props.children[0].props.href.should.equal('https://open.music.com/redfang');
        listItem.children[1].props.children[0].props.children.type.should.equal('img');
        listItem.children[1].props.children[1].type.should.equal('br');
        listItem.children[1].props.children[2].props.className.should.equal('albumChip');
        listItem.children[1].props.children[2].props.children.props.href.should.equal('https://open.music.com/redfang');
        listItem.children[1].props.children[2].props.children.props.children.should.equal('red fang');
    })
});
