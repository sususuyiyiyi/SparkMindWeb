import React from 'react';
import { useState } from 'react';

const IdeaList = ({ ideas, onIdeaUpdate, onIdeaDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');

  const handleEdit = (idea) => {
    setEditingId(idea._id);
    setEditContent(idea.content);
  };

  const handleSave = async (id) => {
    await onIdeaUpdate(id, { content: editContent });
    setEditingId(null);
  };

  return (
    <div className="idea-list">
      {ideas.map(idea => (
        <div key={idea._id} className="idea-item">
          {editingId === idea._id ? (
            <>
              <input
                type="text"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
              <button onClick={() => handleSave(idea._id)}>保存</button>
              <button onClick={() => setEditingId(null)}>取消</button>
            </>
          ) : (
            <>
              <p>{idea.content}</p>
              <div className="idea-actions">
                <button onClick={() => handleEdit(idea)}>编辑</button>
                <button onClick={() => onIdeaDelete(idea._id)}>删除</button>
              </div>
            </>
          )}
          <div className="idea-tags">
            {idea.tags.map(tag => (
              <span 
                key={tag._id} 
                className="tag" 
                style={{ backgroundColor: tag.color }}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeaList; 