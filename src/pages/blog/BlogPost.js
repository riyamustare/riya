import React from 'react';
import { useParams } from 'react-router-dom';

const blogContent = {
  blog1: {
    title: 'Building Products That Users Love!',
    content: `I recently came across Sam Altman’s Startup Playbook, and honestly, it changed how I think about building things. As someone who loves tech and startups, I’ve always been curious about what makes them succeed—or fail.

Sam Altman, former Y Combinator president and now OpenAI’s CEO, has worked with countless founders, so when he shares advice, you listen! And what I loved about this playbook is that it’s not filled with vague, motivational stuff - it’s direct, practical, and brutally honest.

Below are my takeaways and I can’t wait to put them into action :)

### 1 Big Ideas Matter, But Execution Matters More
One thing that stood out to me right away: you don’t need a perfect idea to start, but you do need to execute well.

I used to think that the hardest part of a startup was coming up with a brilliant, world-changing idea. But Sam flips that thinking—he says the best founders don’t just have great ideas; they work relentlessly to make them real.

> “A mediocre idea with great execution will go further than a great idea with poor execution.”

That hit hard. Speed and Iteration are key, so Just start, test, and improve!

### 2 Find a Problem People Actually Care About
Sam emphasizes that successful startups solve real problems. It’s not about what sounds cool—it’s about what people actually need.

a simple test Sam suggested:
✔️ Would I use this myself?
✔️ Would other people feel a real need for this?
✔️ Can I start small and scale it up?

If the answer isn’t a strong yes, it’s probably not worth spending months on.

### 3 Talk to Users—A Lot
"the best startups obsess over their users."

Instead of building in isolation:
- Launch quickly—don’t overcomplicate version 1.
- Get real users ASAP (even if it’s just 10 people).
- Ask them what they love, hate, and wish for.

Listening to users > guessing what they want.

### 4 Relentless Founders Win
The difference between success and failure? "Persistence"

> "Startups are hard. Things will go wrong. But the best founders don’t quit."

### 5 "Build It and They Will Come" is a Lie
I always thought a great product would naturally attract users. Nope. Sam says distribution is just as important as the product itself.

Whether it’s SEO, social media, or partnerships—having a strategy to get users is crucial.

### 6 Just Start. Seriously.
This was my biggest takeaway. No startup is perfect at the beginning. You’ll make mistakes. Your first version might suck. But the only way to improve is to - launch, learn, and iterate.

And now, I’ve already started building. I’ll be launching soon - and I’m really excited to learn and grow along the way <3`,

  },
  blog2: {
    title: 'Deepseek R1 for Everyone!',
    content: `

I have been exploring about DeepSeek-V1, and wow—it is really intresting! As a someone who's always curious and love to understand how things work digging into how new models work, especially when they introduce concepts that improve efficiency and performance.

This article breaks down DeepSeek-V1, a powerful open-weight language model, and explains GRPO (General Reinforcement Learning from Pretrained Offline Models) along with multi-stage training—two techniques that make AI models smarter and more efficient. Here’s what I learned and why I’m excited to apply these ideas in my own AI projects.
## GRPO: A Smarter Way to Train Models
One of the biggest challenges with training massive AI models is efficiency—how to make them learn faster and perform better without just throwing more hardware at the problem. That’s where GRPO comes in.

From what I understood, GRPO works by separating important and unimportant information during training. Instead of treating all data equally, the model focuses more on the crucial parts while filtering out noise.

Multi-Stage Training: A Step-by-Step Learning Process
Instead of training the model all at once, it's trained in phases, where each stage builds on the previous one.

and Why This Matters?
✅ More efficient AI training.
✅ Better generalization.
✅ Scalability.

## Multi-Stage Training: A Step-by-Step Learning Process
Another thing that stood out was multi-stage training. Instead of training the model all at once, it's trained in phases, where each stage builds on the previous one.

I like to think of it as learning a skill—first, you master the basics, then gradually tackle more advanced concepts. Here’s how I understood it:

Early stage: The model learns basic language patterns.
Middle stage: It starts recognizing deeper relationships between words and concepts.
Final stage: It refines its understanding, optimizing for better reasoning and response quality.
This structured approach helps the model improve steadily rather than struggling to grasp everything at once. It’s also a great way to reduce training costs while still achieving high performance.

and Why This Matters

✅ More efficient AI training – GRPO helps focus on what matters, reducing wasted computation.
✅ Better generalization – Multi-stage training ensures the model learns in a structured way, leading to stronger reasoning skills.
✅ Scalability – These techniques can be applied to larger models without making training ridiculously expensive.

For anyone interested, these concepts are worth exploring further!`,
  },
//   blog3: {
//     title: 'Deepseek R1 for Everyone!',
//     content: `

// I have been exploring about DeepSeek-V1, and wow—it is really intresting! As a someone who's always curious and love to understand how things work digging into how new models work, especially when they introduce concepts that improve efficiency and performance.

// This article breaks down DeepSeek-V1, a powerful open-weight language model, and explains GRPO (General Reinforcement Learning from Pretrained Offline Models) along with multi-stage training—two techniques that make AI models smarter and more efficient. Here’s what I learned and why I’m excited to apply these ideas in my own AI projects.
// ## GRPO: A Smarter Way to Train Models
// One of the biggest challenges with training massive AI models is efficiency—how to make them learn faster and perform better without just throwing more hardware at the problem. That’s where GRPO comes in.

// From what I understood, GRPO works by separating important and unimportant information during training. Instead of treating all data equally, the model focuses more on the crucial parts while filtering out noise.

// Multi-Stage Training: A Step-by-Step Learning Process
// Instead of training the model all at once, it's trained in phases, where each stage builds on the previous one.

// and Why This Matters?
// ✅ More efficient AI training.
// ✅ Better generalization.
// ✅ Scalability.

// ## Multi-Stage Training: A Step-by-Step Learning Process
// Another thing that stood out was multi-stage training. Instead of training the model all at once, it's trained in phases, where each stage builds on the previous one.

// I like to think of it as learning a skill—first, you master the basics, then gradually tackle more advanced concepts. Here’s how I understood it:

// Early stage: The model learns basic language patterns.
// Middle stage: It starts recognizing deeper relationships between words and concepts.
// Final stage: It refines its understanding, optimizing for better reasoning and response quality.
// This structured approach helps the model improve steadily rather than struggling to grasp everything at once. It’s also a great way to reduce training costs while still achieving high performance.

// and Why This Matters

// ✅ More efficient AI training – GRPO helps focus on what matters, reducing wasted computation.
// ✅ Better generalization – Multi-stage training ensures the model learns in a structured way, leading to stronger reasoning skills.
// ✅ Scalability – These techniques can be applied to larger models without making training ridiculously expensive.

// For anyone interested, these concepts are worth exploring further!`,
//   },
};

function BlogPost() {
  const { id } = useParams();
  const post = blogContent[id];

  if (!post) {
    return <h1 className="text-white text-xl text-center mt-10">Blog Post Not Found</h1>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">{post.title}</h1>
      <article className="prose prose-invert max-w-none text-neutral-300 leading-7">
        {post.content.split('\n').map((paragraph, index) => (
          paragraph.startsWith('##') ? (
            <h2 key={index} className="text-2xl font-semibold mt-6">{paragraph.replace('## ', '')}</h2>
          ) : paragraph.startsWith('###') ? (
            <h3 key={index} className="text-xl font-semibold mt-4">{paragraph.replace('### ', '')}</h3>
          ) : paragraph.startsWith('>') ? (
            <blockquote key={index} className="border-l-4 border-blue-400 pl-4 italic text-neutral-400">{paragraph.replace('> ', '')}</blockquote>
          ) : (
            <p key={index} className="mt-2">{paragraph}</p>
          )
        ))}
      </article>
    </div>
  );
}

export default BlogPost;
