import React from 'react'
import AboutContent from './AboutContent'
import about from './about.json'

export function StoryMasterContent() {
    return (
        <div className="story-master-home">
            <h1 className="m-4 text-center">Story Master</h1>
            <h3 className="m-4 text-center">Join us in our fun Daily Writing Contest</h3>
            {
                about.map(each => <AboutContent subtitle={each.section.subtitle} paragraph={each.section.description} />)
            }
        </div>
    )
}
