import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <main className="py-6 text-left font-light">
      <MetaTags title="About" />

      <figure>
        <div className="sd:h-64 sd:overflow-hidden">
          <img
            alt="RedwoodJS"
            src="https://cdn.filestackcontent.com/resize=width:1600/XQ2DLsxfRZGMMvDpWjUW"
          />
        </div>
        <figcaption className="text-right text-sm text-gray-500">
          Image from https://redwoodjs.com/
        </figcaption>
      </figure>

      <p className="mt-4">
        <strong className="font-semibold">Simple Blog</strong> is a light
        application created with the{' '}
        <a className="underline" href="https://redwoodjs.com">
          Redwood Framework
        </a>{' '}
        . It demonstrates many of the core Redwood concepts including:
      </p>
      <ul className="mt-4 ml-8 list-outside list-disc">
        <li>
          Routing using <strong className="font-semibold">pages</strong>
        </li>
        <li>
          Wrapping pages in <strong className="font-semibold">layouts</strong>
        </li>
        <li>
          Authentication using{' '}
          <strong className="font-semibold">dbAuth</strong>
        </li>
        <li>
          Remote data access via{' '}
          <strong className="font-semibold">GraphQL</strong>
        </li>
      </ul>
      <p className="mt-4">
        Let's check out the code in the{' '}
        <a
          href="https://github.com/WoodRex/simple-redwood-blog"
          className="underline"
        >
          Github
        </a>{' '}
        repo and read the{' '}
        <a
          href="https://github.com/WoodRex/simple-redwood-blog/tree/master/README.md"
          className="underline"
        >
          README
        </a>{' '}
        for more details.
      </p>
    </main>
  )
}

export default AboutPage
