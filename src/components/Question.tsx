import { ReactNode } from 'react';
import cx from 'classnames';

import '../styles/question.scss';

type QuestioProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    };
    children?: ReactNode;
    isHighlighted?: boolean;
    isAnswered?: boolean;
}

export function Question({ isAnswered = false, isHighlighted = false, ...props}: QuestioProps) {
    return (
        <div className={cx(
            'question',
            { answered: isAnswered },
            { highlighted: isHighlighted && !isAnswered },
        )}>
            <p>{ props.content }</p>
            <footer>
                <div className="user-info">
                    <img src={ props.author.avatar } alt={ props.author.name } />
                    <span>{ props.author.name }</span>
                </div>
                <div>
                    { props.children }
                </div>
            </footer>
        </div>
    );
}