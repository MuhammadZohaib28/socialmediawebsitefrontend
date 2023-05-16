import React from 'react'
import './sidebar.css'
import { BadgeRounded, Bookmark, Chat, Event, Group, GroupAdd, PlayArrow, PlayCircle, QuestionAnswer, QuestionMarkSharp, RssFeed, School, VideoChat, Work } from '@mui/icons-material'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
                <RssFeed className='sidebarIcon'/>
                <span className="sidebarListItemText">Feed</span>
              </li>

              <li className="sidebarListItem">
                <Chat className='sidebarIcon'/>
                <span className="sidebarListItemText">Chat</span>
              </li>

              <li className="sidebarListItem">
                <PlayCircle className='sidebarIcon'/>
                <span className="sidebarListItemText">Videos</span>
              </li>

              <li className="sidebarListItem">
                <GroupAdd className='sidebarIcon'/>
                <span className="sidebarListItemText">Group</span>
              </li>

              <li className="sidebarListItem">
                <Bookmark className='sidebarIcon'/>
                <span className="sidebarListItemText">Bookmarks</span>
              </li>

              <li className="sidebarListItem">
                <QuestionAnswer className='sidebarIcon'/>
                <span className="sidebarListItemText">Questions</span>
              </li>

              <li className="sidebarListItem">
                <Group className='sidebarIcon'/>
                <span className="sidebarListItemText">Group</span>
              </li>

              <li className="sidebarListItem">
                <Work className='sidebarIcon'/>
                <span className="sidebarListItemText">Jobs</span>
              </li>

              <li className="sidebarListItem">
                <Event className='sidebarIcon'/>
                <span className="sidebarListItemText">Events</span>
              </li>

              <li className="sidebarListItem">
                <School className='sidebarIcon'/>
                <span className="sidebarListItemText">Courses</span>
              </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr />
            
        </div>

        
    </div>
  )
}

export default Sidebar