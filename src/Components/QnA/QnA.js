import { CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const QnA = () => {
    return (
        <div>
            <div>
                <QuestionMarkCircleIcon></QuestionMarkCircleIcon> <h3>What is Context API?</h3>
            </div>
            <div>
                <CheckCircleIcon></CheckCircleIcon> <p>
                    By default, data is passed in a top-down flow in a react application via props. That means by default we can not pass data to a child component
                    without sharing it with its parent. But sometimes we face such requirements. And Context API does it very smoothly. We can declare a context
                    and inside that context, we can pass data to a component without sharing it with its parent component if we want.
                </p>
            </div>
            <div>
                <QuestionMarkCircleIcon></QuestionMarkCircleIcon> <h3>What is Semantic Tag?</h3>
            </div>
            <div>
                <CheckCircleIcon></CheckCircleIcon> <p>
                    Semantic HTML elements or tags are tags that are self-descriptive. We can get the purpose of the elements just by looking at their names.
                    Also, we can get an idea about the content type inside the element. It makes HTML more human and machine-readable.
                </p>
            </div>
            <div>
                <QuestionMarkCircleIcon></QuestionMarkCircleIcon><h3>What is Context API?</h3>
            </div>
            <div>
                <CheckCircleIcon></CheckCircleIcon> <p>
                    Differences among inline, inline-block and block element are given below:
                </p>
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th>Song</th>
                            <th>Artist</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td>Malcolm Lockyer</td>
                            <td>1961</td>
                        </tr>
                        <tr>
                            <td>Witchy Woman</td>
                            <td>The Eagles</td>
                            <td>1972</td>
                        </tr>
                        <tr>
                            <td>Shining Star</td>
                            <td>Earth, Wind, and Fire</td>
                            <td>1975</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default QnA;