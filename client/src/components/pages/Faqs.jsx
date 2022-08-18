import { Link } from 'react-router-dom'
import hope from '../../assets/images/hope.jpg'
import faqsTitle from '../../assets/images/faqwordart.png'

const faqs = [
	{
		question: 'When is the RSVP Deadline?',
		answer: 'Please RSVP By September 10, 2022.',
	},
	{
		question: 'Is there a dress code?',
		answer: 'Business Casual. No Jeans tho, ew gross.',
	},
	{
		question: 'Will the event be indoors or outdoors?',
		answer: 'Outdoors.',
	},
	{
		question: "What should I do if I can't make it?",
		answer:
			'You will be missed! If you can\'t make it to the wedding, please let us know as soon as possible and RSVP "NO" so we can plan accordingly',
	},
	{
		question: 'Can I bring a date?',
		answer:
			"Due to limited space, we're only able to accomodate those guest formally invited. If you received a plus one they will appear under your name when you RSVP",
	},
	{
		question: 'Do you have a Hotel Block for guests?',
		answer: `No, we don't have a hotel block. We have found a few hotels around the area found in the link below.`,
		to: '/travel',
	},
	{
		question: 'Where should guests park? Is parking free?',
		answer: 'Liberty Station parking is free to the public.',
	},
	{
		question: 'I Still have questions, what is the best way to contact you?',
		answer:
			'Call Kasey. Barry sucks at responding. email us at kaseybarryday@gmail.com',
	},
	{
		question: 'Is it okay to take pictures with our phones and cameras?',
		answer:
			"Yes, take as many as you'd like. You can upload the photos to the link below if you'd like to share.",
		to: '/photos',
	},
]

const Faqs = () => {
	return (
		<div className='faqs page'>
			<div className='faqs-title'>
				<img className='wordart' src={faqsTitle} alt='faqs wordart' />
			</div>
			<div className='faqs-list'>
				{faqs.map(({ question, answer, to }) => (
					<div className='faq'>
						<h2>{question}</h2>
						<h4>{answer}</h4>
						{to ? <Link to={to}>Here</Link> : null}
					</div>
				))}
			</div>
			<div className='picture'>
				<img src={hope} alt='barry and kasey looking up' />
			</div>
		</div>
	)
}

export default Faqs
