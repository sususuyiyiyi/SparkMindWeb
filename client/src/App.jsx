// App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [tags, setTags] = useState(['技术创新', '商业想法', 'python'])
  const [ideas, setIdeas] = useState([
    {
      content: '持续贴近用户的持续疏离的idea',
      date: '2024-03-13'
    },
    {
      content: '探索订阅制商业模式的创新',
      date: '2024-12-01'
    },
    {
      content: '变现能力强',
      date: '2024-12-01'
    }
  ])

  return (
    <div className="app-container">
      {/* 左侧标签区 */}
      <div className="tags-panel">
        <h2>标签分类</h2>
        <div className="tag-input-area">
          <input type="text" placeholder="新建标签" />
          <button className="add-btn">+</button>
        </div>
        <div className="tags-list">
          {tags.map((tag, index) => (
            <div key={index} className="tag-item">
              {tag}
              <span className="remove-tag">×</span>
            </div>
          ))}
        </div>
      </div>

      {/* 中间内容区 */}
      <div className="content-panel">
        <h2>Spark Mind</h2>
        <div className="idea-input-area">
          <textarea placeholder="记录新的灵感..." />
          <div className="button-group">
            <button className="add-idea">添加</button>
            <button className="ai-assist">AI拓展思维</button>
          </div>
        </div>
        <div className="ideas-list">
          {ideas.map((idea, index) => (
            <div key={index} className="idea-item">
              <p>{idea.content}</p>
              <div className="idea-footer">
                <span className="date">{idea.date}</span>
                <div className="idea-actions">
                  <button className="edit-btn">✎</button>
                  <button className="delete-btn">×</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 右侧思维导图区 */}
      <div className="mindmap-panel">
        <h2>灵感思维树</h2>
        <div className="mindmap-area">
          {/* 思维导图将在这里实现 */}
        </div>
        <div className="stats-area">
          <h3>数据洞察</h3>
          <div className="stat-item">
            <span>总灵感数</span>
            <span className="stat-value">4</span>
          </div>
          <div className="stat-item">
            <span>最活跃标签</span>
            <span className="stat-value">商业想法 (3)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App