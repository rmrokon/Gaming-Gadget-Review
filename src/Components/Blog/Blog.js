import { ArrowRightIcon, CheckCircleIcon, QuestionMarkCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='grid grid-cols-1 place-items-center p-5'>
            <div className='border-2 rounded-lg border-orange-100 mt-5 p-3  md:w-1/2'>

                <QuestionMarkCircleIcon className='w-6 h-6 mr-3 inline text-orange-400'></QuestionMarkCircleIcon> <h3 className='inline text-lg font-bold'>What is Context API?</h3>

                <div className=''>
                    <CheckCircleIcon className='w-6 h-6 mr-3 inline text-orange-400'></CheckCircleIcon> <p className='inline'>
                        By default, data is passed in a top-down flow in a react application via props. That means by default we can not pass data to a child component
                        without sharing it with its parent. But sometimes we face such requirements. And Context API does it very smoothly. We can declare a context
                        and inside that context, we can pass data to a component without sharing it with its parent component if we want.
                    </p>
                </div>
            </div>
            <div className='border-2 rounded-lg border-orange-100 mt-5 p-3  md:w-1/2'>

                <QuestionMarkCircleIcon className='w-6 h-6 mr-3 inline text-orange-400'></QuestionMarkCircleIcon> <h3 className='inline text-lg font-bold'>What is Semantic Tag?</h3>

                <div className=''>
                    <CheckCircleIcon className='w-6 h-6 mr-3 inline text-orange-400'></CheckCircleIcon> <p className='inline'>
                        Semantic HTML elements or tags are tags that are self-descriptive. We can get the purpose of the elements just by looking at their names.
                        Also, we can get an idea about the content type inside the element. It makes HTML more human and machine-readable.
                    </p>
                </div>
            </div>
            <div className='border-2 rounded-lg border-orange-100 mt-5 p-3  md:w-1/2'>

                <QuestionMarkCircleIcon className='w-6 h-6 mr-3 inline text-orange-400'></QuestionMarkCircleIcon><h3 className='inline text-lg font-bold'>What are the differences among inline, block and inline-block elements?</h3>

                <div className=''>
                    <CheckCircleIcon className='w-6 h-6 mr-3 inline text-orange-400'></CheckCircleIcon><p className='inline'>Differences among inline, block and inline-block elements:</p>

                    <div className='ml-10'>
                        <div>
                            <ArrowRightIcon className='w-6 h-6 inline text-orange-400'></ArrowRightIcon> <p className='inline'>
                                <span className='font-bold'>Inline Element:</span> Inline elements do not start in a new line. They just take the width they need. We can not set their width and height.
                            </p>
                        </div>
                        <div>
                            <ArrowRightIcon className='w-6 h-6 inline text-orange-400'></ArrowRightIcon> <p className='inline'>
                                <span className='font-bold'>Block element:</span> Block elements start in a new line. By default they take the full available width which we can change later.
                            </p>
                        </div>
                        <div>
                            <ArrowRightIcon className='w-6 h-6 inline text-orange-400'></ArrowRightIcon> <p className='inline'>
                                <span className='font-bold'>Inline-block Element:</span> Inline-block elements do not start in a new line. We can set or change their width and height.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;